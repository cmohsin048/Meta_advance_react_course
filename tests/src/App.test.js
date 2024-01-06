import { fireEvent,render, screen } from '@testing-library/react';
import FeedbackForm from './Feedbackform';

describe("Feedback Form",()=>{
  test("Submission is disabled if score is lower than 5 and there is no feedvack",()=>{
    const handlesubmit=jest.fn()
    render(<FeedbackForm onSubmit={handlesubmit}/>)

    const rangneInput=screen.getByLabelText(/score:/)
    fireEvent.change(rangneInput,{target:{value:4}})

    const submitButton=screen.getByRole("button")
    fireEvent.click(submitButton)

    expect(handlesubmit).not.toHaveBeenCalled()
    expect(submitButton).toHaveAttribute("disabled")
  })
})
