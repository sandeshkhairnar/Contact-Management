// client/src/components/ContactTable.jsx

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  TableSortLabel,
  Box
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const ContactTable = ({
  contacts,
  totalPages,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  handleSort,
  sortBy,
  order,
  onEdit,
  onDelete
}) => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['firstName', 'lastName', 'email', 'phoneNumber', 'company', 'jobTitle'].map((column) => (
                <TableCell key={column}>
                  <TableSortLabel
                    active={sortBy === column}
                    direction={sortBy === column ? order : 'asc'}
                    onClick={() => handleSort(column)}
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell sx={{ padding: '13px' }}>{contact.firstName}</TableCell>
                <TableCell sx={{ padding: '13px' }}>{contact.lastName}</TableCell>
                <TableCell sx={{ padding: '13px' }}>{contact.email}</TableCell>
                <TableCell sx={{ padding: '13px' }}>{contact.phoneNumber}</TableCell>
                <TableCell sx={{ padding: '13px' }}>{contact.company}</TableCell>
                <TableCell sx={{ padding: '13px' }}>{contact.jobTitle}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onEdit(contact)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(contact._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalPages * rowsPerPage}
        page={page - 1}
        onPageChange={(e, newPage) => handleChangePage(newPage + 1)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ContactTable;  // Default export
