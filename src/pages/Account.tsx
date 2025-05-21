
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Account = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const { toast } = useToast();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, here you would authenticate the user
    toast({
      title: "Login Successful",
      description: "Welcome back! You've been logged in.",
    });

    // Reset form
    setLoginData({ email: '', password: '' });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if passwords match
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, here you would register the user
    toast({
      title: "Registration Successful",
      description: "Your account has been created successfully!",
    });

    // Reset form and switch to login
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
    setActiveTab('login');
  };

  return (
    <div className="min-h-screen bg-ecommerce-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="space-y-4 pt-4">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <p className="text-ecommerce-text-secondary">
                  Sign in to your account to continue
                </p>
                
                <form onSubmit={handleLogin} className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={loginData.email} 
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password">Password</Label>
                      <a 
                        href="#" 
                        className="text-sm text-ecommerce-primary hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <Input 
                      id="login-password" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={loginData.password} 
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ecommerce-primary hover:bg-ecommerce-primary/90"
                  >
                    Sign In
                  </Button>
                </form>
                
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-white text-sm text-ecommerce-text-secondary">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                      ></path>
                    </svg>
                    GitHub
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.14 16.5c-.89.47-1.91.79-3 .89V17c0-1.1-.9-2-2-2s-2 .9-2 2v2.39c-1.09-.1-2.11-.42-3-.89-3.11-1.66-4.28-5.52-2.62-8.64 1.66-3.12 5.52-4.29 8.64-2.62 3.12 1.66 4.29 5.51 2.62 8.64-.58 1.08-1.43 1.97-2.49 2.62z"
                      ></path>
                    </svg>
                    Google
                  </Button>
                </div>
                
                <p className="text-center text-sm text-ecommerce-text-secondary pt-2">
                  Don't have an account?{" "}
                  <button 
                    onClick={() => setActiveTab('register')}
                    className="text-ecommerce-primary hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="register">
              <div className="space-y-4 pt-4">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p className="text-ecommerce-text-secondary">
                  Register to start shopping with us
                </p>
                
                <form onSubmit={handleRegister} className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input 
                      id="register-name" 
                      name="name" 
                      placeholder="John Doe" 
                      value={registerData.name} 
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={registerData.email} 
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input 
                      id="register-password" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={registerData.password} 
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <Input 
                      id="register-confirm-password" 
                      name="confirmPassword" 
                      type="password" 
                      placeholder="••••••••" 
                      value={registerData.confirmPassword} 
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ecommerce-primary hover:bg-ecommerce-primary/90"
                  >
                    Create Account
                  </Button>
                </form>
                
                <p className="text-center text-sm text-ecommerce-text-secondary pt-2">
                  Already have an account?{" "}
                  <button 
                    onClick={() => setActiveTab('login')}
                    className="text-ecommerce-primary hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Account;
