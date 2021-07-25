import { render ,screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import userEvent from '@testing-library/user-event';
import UserDetail from './features/detail/UserDetail';
import Step1Form from './features/detail/Step1Form';
import Step2Form from './features/detail/Step2Form';
import Step3Form from './features/detail/Step3Form';

test('Shows dummy profile data', () => {
  const { container } =render(
    <Provider store={store}>
      <App />
    </Provider>
  ); 
  expect(container.firstChild).toMatchSnapshot();
});
test('Able to edit summy profile data', () => {
   render(
    <Provider store={store}>
      <App />
    </Provider>
  ); 
  expect(screen.queryByText('Edit')).toBeInTheDocument(); 
  userEvent.click(screen.getByRole('button', { name: /Edit/i }));
  expect(screen.getByText('Step 1')).toBeInTheDocument();
});
test('Able to edit and save Step1', () => {
  const { container } = render(
   <Provider store={store}>
       <Step1Form handleSubmit={() => {}} prevPage={()=>{}}></Step1Form>
   </Provider>
 ); 
 expect(screen.queryByText('Next')).toBeInTheDocument(); 
 expect(screen.queryByText('Clear')).toBeInTheDocument();  
 expect(container.firstChild).toMatchSnapshot();
});
test('Able to edit and save Step2', () => {
  const { container } = render(
   <Provider store={store}>
     <Step2Form handleSubmit={() => {}} prevPage={()=>{}}></Step2Form>
   </Provider>
 ); 
 expect(screen.queryByText('Next')).toBeInTheDocument(); 
 expect(screen.queryByText('Clear')).toBeInTheDocument(); 
 expect(screen.queryByText('Prev')).toBeInTheDocument();  
 expect(container.firstChild).toMatchSnapshot();
});

test('Able to edit and save Step3', () => {
  const { container } = render(
   <Provider store={store}>
     <Step3Form handleSubmit={() => {}} prevPage={()=>{}}></Step3Form>
   </Provider>
 );  
 expect(screen.queryByText('Clear')).toBeInTheDocument(); 
 expect(screen.queryByText('Prev')).toBeInTheDocument();  
 expect(screen.queryByText('Save')).toBeInTheDocument();  
 expect(container.firstChild).toMatchSnapshot();
});