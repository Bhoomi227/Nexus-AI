import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="text-9xl font-bold text-indigo-600/10 mb-8">404</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Page not found</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button className="gap-2">
              <Home size={18} /> Back to Home
            </Button>
          </Link>
          <Button variant="ghost" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft size={18} /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
