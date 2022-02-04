import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

const InvoiceId = () => {
  const params = useParams(),
    invoice = getInvoice(parseFloat(params.invoiceId));
  const navigate = useNavigate()
  return <main>
    <p>{invoice.name}</p>
    <p>{invoice.amount}</p>
    <p>{invoice.due}</p>
    <button
      onClick={() => {
        deleteInvoice(invoice.number)
        navigate('/invoices')
      }}
    >del</button>
  </main>;
};

export default InvoiceId;
