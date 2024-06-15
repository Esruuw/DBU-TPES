import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login.jsx';


jest.mock('axios');

const API_URL = "http://localhost:5000"; // Adjust the URL as necessary
const mock = new MockAdapter(axios);

describe('Login Component', () => {
  test('renders login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Email...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password...')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email...'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password...'), { target: { value: 'password123' } });

    expect(screen.getByPlaceholderText('Email...').value).toBe('test@example.com');
    expect(screen.getByPlaceholderText('Password...').value).toBe('password123');
  });

  test('handles form submission and navigates on successful login for student', async () => {
    const userData = {
      user: { role: 'student', dbuId: 'S001' },
      token: 'fake-jwt-token'
    };
    mock.onPost(`${API_URL}/auth/login`).reply(200, userData);

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText('Email...'), { target: { value: 'student@example.com' } });
    fireEvent.change(getByPlaceholderText('Password...'), { target: { value: 'password123' } });
    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('fake-jwt-token');
      expect(localStorage.getItem('studentId')).toBe('S001');
    });

    expect(window.location.pathname).toBe('/Studentform');
  });

  test('displays error message on failed login', async () => {
    mock.onPost(`${API_URL}/auth/login`).reply(403);

    const { getByPlaceholderText, getByText, findByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText('Email...'), { target: { value: 'wrong@example.com' } });
    fireEvent.change(getByPlaceholderText('Password...'), { target: { value: 'wrongpassword' } });
    fireEvent.click(getByText('Login'));

    const errorMessage = await findByText('email or password incorrect');
    expect(errorMessage).toBeInTheDocument();
  });
});
