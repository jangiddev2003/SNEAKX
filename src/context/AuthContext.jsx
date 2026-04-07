import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking Firebase Auth persistency
    const storedUser = localStorage.getItem('sneakx_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginAuth = async (email, password) => {
    setLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser = { uid: '12345', email, displayName: email.split('@')[0] };
    setUser(mockUser);
    localStorage.setItem('sneakx_user', JSON.stringify(mockUser));
    setLoading(false);
    toast.success('Successfully logged in!');
    return mockUser;
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const mockUser = { uid: '98765', email: 'guest@google.com', displayName: 'Guest User' };
    setUser(mockUser);
    localStorage.setItem('sneakx_user', JSON.stringify(mockUser));
    setLoading(false);
    toast.success('Logged in with Google!');
    return mockUser;
  };

  const logout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(null);
    localStorage.removeItem('sneakx_user');
    setLoading(false);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginAuth, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
