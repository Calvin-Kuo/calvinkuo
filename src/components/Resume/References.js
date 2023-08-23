import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <Link to="/contact">
        <h3><center>Certifications</center></h3>
      </Link>
      <h5>● <a href="https://www.credly.com/badges/21946999-3c10-4cc4-9159-7a173f6f19fa/public_url">Scaled Agile – Certified SAFe® 5 Scrum Master</a></h5>
      <h5>● <a href="https://www.credly.com/badges/7fba4f6d-bccd-4f4d-a122-76faaf08ea3e">Scaled Agile – Certified SAFe® 5 Product Owner/Product Manager</a></h5>
      <h5>● <a href="https://www.credly.com/badges/b4b92c24-d83f-486c-9a04-dc079f1e0a66/linked_in_profile">Scaled Agile – Certified SAFe® 5 Agilist</a></h5>
      <h5>● AT&T REST – Representational State Transfer (REST) Bronze Certified</h5>
      <h5>● MIT - Designing and Implementing Big Data Analytic Solutions</h5>
    </div>
  </div>
);

export default References;
