// components/ScopedLayout.js
import React from 'react';

const layout = ({ children }) => {
  return (
    <div>
      {/* Add any layout elements specific to this scoped layout */}
      <header>
        <h1>Scoped Layout</h1>
      </header>

      <main>{children}</main>

      {/* Add any other layout elements */}
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default layout;
