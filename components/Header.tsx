
import { BookOpenIcon } from './icons';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BookOpenIcon className="h-8 w-8 text-sky-600" />
            <h1 className="text-xl font-bold text-slate-800">
              Prompt Engineering Handbook
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm font-semibold text-slate-500">
              For Professionals by <a href="https://greybrain.ai" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">greybrain.ai</a>
            </div>
            <div className="flex items-center space-x-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
