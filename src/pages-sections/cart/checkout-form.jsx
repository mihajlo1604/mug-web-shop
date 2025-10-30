"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

// MUI
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";

// GLOBAL CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from "components/flex-box";

// DUMMY CUSTOM DATA
import countryList from "data/countryList";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
export default function CheckoutForm() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { state, dispatch } = useCart();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    zipCode: '',
    comments: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const getTotalPrice = () => state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = t('form.fullName.required');
    if (!formData.phone.trim()) newErrors.phone = t('form.phone.required');
    if (!formData.email.trim()) {
      newErrors.email = t('form.email.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.email.invalid');
    }
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = t('form.addressLine1.required');
    if (!formData.country || (typeof formData.country === 'string' && !formData.country.trim())) {
      newErrors.country = t('form.country.required');
    }
    if (!formData.zipCode.trim()) newErrors.zipCode = t('form.zipCode.required');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (!validateForm()) {
      return;
    }

    if (state.cart.length === 0) {
      setSubmitError(t('error.cartEmpty'));
      return;
    }

    setIsLoading(true);
    setIsProcessing(true);
    setSubmitError('');

    try {
      const orderData = {
        ...formData,
        country: typeof formData.country === 'string' ? formData.country : formData.country?.label || '',
        cartItems: state.cart,
        total: getTotalPrice(),
        language: i18n.language || 'en'
      };
      
      console.log('Sending order with language:', i18n.language);

      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to process order');
      }

      // Redirect to confirmation page
      router.push('/order-confirmation');
      
    } catch (error) {
      console.error('Checkout error:', error);
      setSubmitError(error.message || t('error.orderFailed'));
      setIsProcessing(false);
    } finally {
      setIsLoading(false);
    }
  };
  return <Card elevation={0} sx={{
    padding: 3,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "grey.50",
    position: "relative"
  }}>
      <Typography variant="body1" fontWeight={500} sx={{
      mb: 2
    }}>
        {t('form.shippingAddress')}
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      {/* FULL NAME TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.fullName')} 
        variant="outlined" 
        placeholder={t('form.fullName.placeholder')} 
        value={formData.fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        error={!!errors.fullName}
        helperText={errors.fullName}
        sx={{ mb: 2 }} 
      />

      {/* PHONE NUMBER TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.phone')} 
        variant="outlined" 
        placeholder={t('form.phone.placeholder')} 
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
        sx={{ mb: 2 }} 
      />

      {/* EMAIL ADDRESS TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.email')} 
        variant="outlined" 
        placeholder={t('form.email.placeholder')} 
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        sx={{ mb: 2 }} 
      />

      {/* COMPANY TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.company')} 
        variant="outlined" 
        placeholder={t('form.company.placeholder')} 
        value={formData.company}
        onChange={(e) => handleInputChange('company', e.target.value)}
        sx={{ mb: 2 }} 
      />

      {/* FIRST ADDRESS TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.addressLine1')} 
        variant="outlined" 
        placeholder={t('form.addressLine1.placeholder')} 
        value={formData.addressLine1}
        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
        error={!!errors.addressLine1}
        helperText={errors.addressLine1}
        sx={{ mb: 2 }} 
      />

      {/* SECOND ADDRESS TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.addressLine2')} 
        variant="outlined" 
        placeholder={t('form.addressLine2.placeholder')} 
        value={formData.addressLine2}
        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
        sx={{ mb: 2 }} 
      />

      {/* COUNTRY TEXT FIELD */}
      <Autocomplete 
        fullWidth 
        sx={{ mb: 2 }} 
        options={countryList} 
        value={formData.country}
        onChange={(event, newValue) => handleInputChange('country', newValue || '')}
        renderInput={params => (
          <TextField 
            {...params} 
            size="small" 
            label={t('form.country')} 
            variant="outlined" 
            placeholder={t('form.country.placeholder')} 
            error={!!errors.country}
            helperText={errors.country}
          />
        )} 
      />

      {/* ZIP-CODE TEXT FIELD */}
      <TextField 
        fullWidth 
        size="small" 
        label={t('form.zipCode')} 
        placeholder={t('form.zipCode.placeholder')} 
        variant="outlined" 
        value={formData.zipCode}
        onChange={(e) => handleInputChange('zipCode', e.target.value)}
        error={!!errors.zipCode}
        helperText={errors.zipCode}
        sx={{ mb: 2 }} 
      />

      <Divider sx={{
      mb: 2
    }} />

      <FlexBox alignItems="center" columnGap={1} mb={2}>
        <Typography variant="body1" fontWeight={500}>
          {t('form.comments')}
        </Typography>

        <Typography variant="body1" sx={{
        fontSize: 12,
        lineHeight: 1,
        padding: "2px 6px",
        borderRadius: "3px",
        bgcolor: "grey.200"
      }}>
          {t('form.comments.note')}
        </Typography>
      </FlexBox>

      {/* COMMENTS TEXT FIELD */}
      <TextField 
        variant="outlined" 
        rows={3} 
        fullWidth 
        multiline 
        value={formData.comments}
        onChange={(e) => handleInputChange('comments', e.target.value)}
        placeholder={t('form.comments.placeholder')}
      />

      <Divider sx={{
      mb: 2
    }} />

      <FlexBetween mb={2}>
        <Typography variant="body1" fontSize={16} fontWeight={600}>
          {t('cart.total')}
        </Typography>

        <Typography variant="body1" fontSize={18} fontWeight={600} lineHeight={1}>
          {currency(getTotalPrice())}
        </Typography>
      </FlexBetween>

      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={handleCheckout}
        disabled={isLoading}
        sx={{ my: 2 }}
      >
        {isLoading ? (
          <FlexBox alignItems="center" gap={1}>
            <CircularProgress size={20} color="inherit" />
            {t('button.processing')}
          </FlexBox>
        ) : (
          t('button.checkout')
        )}
      </Button>

      {/* Processing Overlay */}
      {isProcessing && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            borderRadius: 1
          }}
        >
          <CircularProgress size={40} sx={{ mb: 2 }} />
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {t('button.processing')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
            Please wait while we process your order...
          </Typography>
        </Box>
      )}
    </Card>;
}