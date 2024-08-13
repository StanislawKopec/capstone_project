import { render, screen,  fireEvent,waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservePage, { initializeTimes, timesReducer} from "../components/ReservePage";
import { fetchAPI, submitAPI } from '../api';
import { BrowserRouter } from 'react-router-dom';
import * as ReservePageModule from './ReservePage';

describe("test BookingForm component", () => {

    it("renders the label for choose time dropdown", () => {
        render(<BrowserRouter><ReservePage /></BrowserRouter>);
        const labelElement = screen.getByText("Choose time");
        expect(labelElement).toBeInTheDocument();
    });


    jest.mock('./ReservePage', () => ({
        ...jest.requireActual('./ReservePage'),
        fetchAPI: jest.fn(),
      }));
      
      describe('initializeTimes function', () => {
        it('should return an array', () => {
          const testDate = new Date('2024-08-12');
          const result = initializeTimes(testDate);
      
          expect(Array.isArray(result)).toBe(true);
        });
      });

      it("validates all input elements have the correct type attribute to enable native client-side HTML5 form validation", () => {
        render(<BrowserRouter><ReservePage /></BrowserRouter>);

        const dateInput = screen.getByTestId("date");
        const timeInput = screen.getByTestId("time")
        const guestsInput = screen.getByTestId("guests");
        const occasionInput = screen.getByTestId("occasion");

        expect(dateInput).toHaveAttribute("type", "date");
        expect(timeInput).toHaveAttribute("name", "time");
        expect(guestsInput).toHaveAttribute("type", "number");
        expect(occasionInput).toHaveAttribute("name", "occasion");
    });
    describe('ReservePage Form Validation', () => {
      test('When guests input is 0 disables submit button', async () => {
        render(
          <BrowserRouter>
            <ReservePage />
          </BrowserRouter>
        );
    
        const guestsInput = screen.getByTestId("guests");
        const submitButton = screen.getByTestId("submit");
    
        userEvent.type(guestsInput, "0");
    
        await waitFor(() => {
          expect(submitButton).toBeDisabled();
        });
      });
    });

    test('Submit button is enabled if all fields are valid', async () => {
      render(
        <BrowserRouter>
          <ReservePage />
        </BrowserRouter>
      );
    
      const testDate = new Date('2024-08-12');
      const result = initializeTimes(testDate);
    
      const dateInput = screen.getByTestId("date");
      const timeInput = screen.getByTestId("time")
      const guestsInput = screen.getByTestId("guests");
      const occasionInput = screen.getByTestId("occasion");
      const submitButton = screen.getByTestId("submit");
      
      userEvent.type(guestsInput, "5");
      userEvent.type(dateInput, testDate);
      userEvent.type(timeInput, result[0]);
      userEvent.selectOptions(occasionInput, "Birthday");
    

      expect(submitButton).toBeEnabled(); 
    });
});