"use client";

import Modal from "@mui/material/Modal";
import Stories from "react-insta-stories";

// STYLED COMPONENTS
import { ModalWrapper } from "./styles";

// STORIES INTERFACES


// ==============================================================


// ==============================================================

export default function StoryViewer({
  open,
  stories,
  handleClose,
  currentIndex,
  width = 360,
  height = 640,
  defaultInterval = 5000
}) {
  return <Modal open={open} onClose={handleClose}>
      <ModalWrapper>
        <Stories width={width} height={height} stories={stories} currentIndex={currentIndex} onAllStoriesEnd={handleClose} defaultInterval={defaultInterval} progressStyles={{
        height: 3,
        borderRadius: 10
      }} progressWrapperStyles={{
        height: 3,
        borderRadius: 10,
        background: "#373F50"
      }} />
      </ModalWrapper>
    </Modal>;
}