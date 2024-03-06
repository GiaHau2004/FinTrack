// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Trang Chủ</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions">Giao Dịch</Link>
        </li>
        <li>
          <Link to="/budgets">Ngân Sách</Link>
        </li>
        <li>
          <Link to="/reports">Báo Cáo</Link>
        </li>
        <li>
          <Link to="/settings">Cài Đặt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
