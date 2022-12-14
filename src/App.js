
import './App.css';
import {Switch ,Link, Route,BrowserRouter as Router} from 'react-router-dom';
import {Layout, Typography,Space } from 'antd';

import { Exchanges, HomePage,  Cryptocurrencies,News, CryptoDetails, Navbar } from './component';
import './App.css'

const App=()=> {
  return (
  
    <div className='app'>
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='main'>
      <Layout>
        <div className='routes'>
        
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/exchanges">
              <Exchanges/>
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies/>
            </Route>
            <Route exact path="/cypto/:coinId">
              <CryptoDetails/>
            </Route>
            <Route exact path="/news">
              <News/>
            </Route>
          </Switch>

        </div>
      </Layout>
      
      <div className="footer">
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>aman.prakash@synoriq.in © 2022-
          <Link to="/">
             Powerd By Amanprakash
          </Link> <br />
          All Rights Reserved.CryptoDetails Application
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  
  );
}

export default App;
