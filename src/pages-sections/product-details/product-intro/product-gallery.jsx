"use client";

import Image from "next/image";
import { Fragment, useState } from "react";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";

// STYLED COMPONENTS
import { PreviewImage, ProductImageWrapper } from "./styles";

export default function ProductGallery({
  images
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const handleZoomOpen = () => setZoomOpen(true);
  const handleZoomClose = () => setZoomOpen(false);

  return <Fragment>
      <ProductImageWrapper onClick={handleZoomOpen} sx={{ cursor: 'pointer', position: 'relative' }}>
        <Image fill alt="product" src={images[currentImage]} sizes="(400px 400px)" />
        <Box sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ZoomInIcon sx={{ color: 'white', fontSize: 20 }} />
        </Box>
      </ProductImageWrapper>

      <div className="preview-images">
        {images.map((url, ind) => <PreviewImage key={ind} onClick={() => setCurrentImage(ind)} selected={currentImage === ind}>
            <Image fill alt="product" src={url} sizes="(48px 48px)" />
          </PreviewImage>)}
      </div>

      {/* Zoom Modal */}
      <Dialog
        open={zoomOpen}
        onClose={handleZoomClose}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white'
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleZoomClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '80vh',
            p: 2
          }}>
            <Image
              src={images[currentImage]}
              alt="product zoom"
              width={800}
              height={800}
              style={{
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </Box>
          
          {/* Thumbnail navigation in modal */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1, 
            p: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}>
            {images.map((url, ind) => (
              <Box
                key={ind}
                onClick={() => setCurrentImage(ind)}
                sx={{
                  width: 60,
                  height: 60,
                  border: currentImage === ind ? '2px solid #A37F74' : '2px solid transparent',
                  borderRadius: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  opacity: currentImage === ind ? 1 : 0.7,
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                <Image
                  fill
                  alt={`product thumbnail ${ind + 1}`}
                  src={url}
                  sizes="(60px 60px)"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Fragment>;
}