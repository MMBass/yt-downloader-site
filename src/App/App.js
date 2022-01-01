import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import serverAxios from "@apis/serverAxios";

import './App.scss';
import Header from '@components/Header/Header';
import Layout from '@components/Layout/Layout';
import HeadTags from '@components/HeadTags/HeadTags';

import HomePage from '@pages/HomePage/HomePage';
import HistoryPage from '@pages/HistoryPage/HistoryPage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';
import NoMatchPage from '@pages/NoMatchPage/NoMatchPage';

function App() {
  const mode = useSelector(state => state.settings.mode);

  function init() {
    serverAxios.get('/',{ headers:{ 'x-api-key':  window.localStorage.getItem('API_KEY')}}).then((response) => {
      if (response.status === 200 && response.headers["access-token"]) {
         window.localStorage.setItem('ACCESS_TOKEN',response.headers["access-token"]);
      }else{
        console.log('access-token problem');
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    if ( window.localStorage.getItem('API_KEY') !== null) {
      init();
    }
  }, []);

  return (
    <Router>
      <HeadTags></HeadTags>
      <div className={mode}>
        <Header></Header>
        <Layout>
          {mode === 'video' && 
               <div style={{background: 'pink', border: '1px solid red', fontSize: '13px', padding: '20px',textAlign: 'center'}}>This mode doesnt work properly, the video may downloaded without audio, or low quality.</div>
          }
           {mode === 'playlist' && 
               <div style={{background: 'pink', border: '1px solid red', fontSize: '13px', padding: '20px',textAlign: 'center'}}>Playlist mode not finished yet.</div>
          }
          <Routes>
            <Route exact path="yt-downloader-site/" element={<HomePage />} />
            <Route exact path="yt-downloader-site/history" element={<HistoryPage />} />
            <Route exact path="yt-downloader-site/settings" element={<SettingsPage />} />
            <Route path="yt-downloader-site/*" element={<NoMatchPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;