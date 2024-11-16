import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import ContactForm from './ContactForm';

const ContactDialog = ({ open, contact, onClose, onSubmit }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {contact ? 'Edit Contact' : 'Add New Contact'}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <ContactForm
          initialData={contact}
          onSubmit={(data) => {
            onSubmit(data);
            onClose();
          }}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          form="contact-form"
          type="submit"
          variant="contained"
          color="primary"
          sx={{backgroundColor: 'rgb(111,42,223,0.77)' }}
        >
          {contact ? 'Update' : 'Add'} Contact
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;