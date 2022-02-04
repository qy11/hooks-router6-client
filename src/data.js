const invoices = [
  {
    name: 'xiaomi',
    number: 9,
    amount: '$4000',
    due: '01/02/2022'
  },
  {
    name: 'dami',
    number: 8,
    amount: '$7000',
    due: '02/02/2022'
  },
]
export const getInvoices = () => {
  return invoices
}
export const getInvoice = (num) => {
  return invoices.find(item => item.number === num)
}
export const deleteInvoice = (num) => {
  return invoices.filter(item => item.number !== num)
}