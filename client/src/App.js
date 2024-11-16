import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Alert,
  Snackbar,
  Paper
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import ContactTable from './components/ContactTable';
import ContactDialog from './components/ContactDialog';
import { api } from './services/api';

function App() {
  const [contacts, setContacts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('firstName');
  const [order, setOrder] = useState('asc');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await api.getContacts(page, rowsPerPage, sortBy, order);
      setContacts(response.data.contacts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      showAlert('Error fetching contacts', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, rowsPerPage, sortBy, order]);

  const handleSort = (column) => {
    const isAsc = sortBy === column && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setSortBy(column);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const showAlert = (message, severity = 'success') => {
    setAlert({ open: true, message, severity });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const handleSubmit = async (contactData) => {
    try {
      if (selectedContact) {
        await api.updateContact(selectedContact._id, contactData);
        showAlert('Contact updated successfully');
      } else {
        await api.createContact(contactData);
        showAlert('Contact created successfully');
      }
      handleCloseDialog();
      fetchContacts();
    } catch (error) {
      showAlert(error.response?.data?.message || 'Error saving contact', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.deleteContact(id);
      showAlert('Contact deleted successfully');
      fetchContacts();
    } catch (error) {
      showAlert('Error deleting contact', 'error');
    }
  };

  const handleOpenDialog = (contact = null) => {
    setSelectedContact(contact);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedContact(null);
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4" component="h1">
              Contact Management
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog()}
              sx={{
                backgroundColor: 'rgba(111, 42, 223, 0.77)' // Correct syntax for RGBA
              }}
            >
              Add Contact
            </Button>

          </Box>

          <ContactTable
            contacts={contacts}
            loading={loading}
            totalPages={totalPages}
            page={page}
            rowsPerPage={rowsPerPage}
            sortBy={sortBy}
            order={order}
            onSort={handleSort}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onEdit={handleOpenDialog}
            onDelete={handleDelete}
          />
        </Paper>

        <ContactDialog
          open={openDialog}
          contact={selectedContact}
          onClose={handleCloseDialog}
          onSubmit={handleSubmit}
        />

        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert onClose={handleCloseAlert} severity={alert.severity}>
            {alert.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default App;
