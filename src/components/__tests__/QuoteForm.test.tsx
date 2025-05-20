import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuoteForm from '../QuoteForm';

describe('QuoteForm', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders the form with all required fields', () => {
    render(<QuoteForm onSubmit={mockOnSubmit} />);

    // Check for main form elements
    expect(screen.getByText('Get Your Travel Insurance Quote')).toBeInTheDocument();
    expect(screen.getByText('Coverage Dates')).toBeInTheDocument();
    expect(screen.getByText('Coverage Amount')).toBeInTheDocument();
    expect(screen.getByText('Deductible')).toBeInTheDocument();
    expect(screen.getByText('Travellers')).toBeInTheDocument();
  });

  it('allows adding and removing travellers', async () => {
    render(<QuoteForm onSubmit={mockOnSubmit} />);

    // Add a traveller
    const addButton = screen.getByText('Add Traveller');
    fireEvent.click(addButton);

    // Check if new traveller fields are added
    expect(screen.getAllByText('Date of Birth')).toHaveLength(2);
    expect(screen.getAllByText('Type')).toHaveLength(2);

    // Remove a traveller
    const removeButton = screen.getAllByText('Remove')[0];
    fireEvent.click(removeButton);

    // Check if traveller is removed
    expect(screen.getAllByText('Date of Birth')).toHaveLength(1);
  });

  it('validates required fields before submission', async () => {
    render(<QuoteForm onSubmit={mockOnSubmit} />);

    // Try to submit without filling required fields
    const submitButton = screen.getByText('Get Quote');
    fireEvent.click(submitButton);

    // Check for validation messages
    await waitFor(() => {
      expect(screen.getByText('Please select coverage dates')).toBeInTheDocument();
      expect(screen.getByText('Please select coverage amount')).toBeInTheDocument();
      expect(screen.getByText('Please select deductible')).toBeInTheDocument();
    });

    // Verify onSubmit was not called
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submits form with valid data', async () => {
    render(<QuoteForm onSubmit={mockOnSubmit} />);

    // Fill in required fields
    const coverageDatesInput = screen.getByLabelText('Coverage Dates');
    await userEvent.type(coverageDatesInput, '2024-05-01 - 2024-05-15');

    const coverageAmountSelect = screen.getByLabelText('Coverage Amount');
    fireEvent.change(coverageAmountSelect, { target: { value: '500000' } });

    const deductibleSelect = screen.getByLabelText('Deductible');
    fireEvent.change(deductibleSelect, { target: { value: '2000' } });

    const dobInput = screen.getByLabelText('Date of Birth');
    await userEvent.type(dobInput, '1990-01-01');

    // Submit form
    const submitButton = screen.getByText('Get Quote');
    fireEvent.click(submitButton);

    // Verify onSubmit was called with correct data
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
        coverageDates: '2024-05-01 - 2024-05-15',
        coverageAmount: '500000',
        deductible: '2000',
        travellerDOBs: expect.arrayContaining([
          expect.objectContaining({
            dob: '1990-01-01',
            type: 'Adult'
          })
        ])
      }));
    });
  });

  it('handles pre-existing condition toggle', async () => {
    render(<QuoteForm onSubmit={mockOnSubmit} />);

    const preExistingCheckbox = screen.getByLabelText('Pre-existing Condition');
    expect(preExistingCheckbox).not.toBeChecked();

    fireEvent.click(preExistingCheckbox);
    expect(preExistingCheckbox).toBeChecked();

    // Submit form
    const submitButton = screen.getByText('Get Quote');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
        preExisting: true
      }));
    });
  });
}); 