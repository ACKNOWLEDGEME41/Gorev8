import React, { useState } from 'react';
import './App.css'; 

const ÖdemeFormu = () => {
  const [kartÜzerindekiİsim, setKartÜzerindekiİsim] = useState('');
  const [kartNumarası, setKartNumarası] = useState('');
  const [ay, setAy] = useState('');
  const [yıl, setYıl] = useState('');
  const [güvenlikKodu, setGüvenlikKodu] = useState('');

  const aylar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const şuAnkiYıl = new Date().getFullYear();
  const yıllar = [];
  for (let i = şuAnkiYıl; i < şuAnkiYıl + 10; i++) {
    yıllar.push(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Kart Üzerindeki İsim: ${kartÜzerindekiİsim}\nKart Numarası: ${kartNumarası}\nAy: ${ay}\nYıl: ${yıl}\nGüvenlik Kodu: ${güvenlikKodu}`);
  };

  return (
    <div className="ödeme-formu">
      <h2>Ödeme Bilgileri</h2>
      <p>Kredi kartı bilgilerinizi giriniz</p>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label>Kart Üzerindeki İsim</label>
    <input
      type="text"
      value={kartÜzerindekiİsim}
      onChange={(e) => setKartÜzerindekiİsim(e.target.value)}
      placeholder="Ahmet Yılmaz"
    />
  </div>

  <div className="form-group">
    <label>Kart Numarası</label>
    <input
      type="text"
      value={kartNumarası}
      onChange={(e) => setKartNumarası(e.target.value)}
      placeholder="0000 0000 0000 0000"
    />
  </div>
  
  <div className="form-row">
    <div className="form-group">
      <label>Ay</label>
      <select value={ay} onChange={(e) => setAy(e.target.value)}>
        <option value="">AA</option>
        {aylar.map((ay, index) => (
          <option key={index} value={ay}>{ay}</option>
        ))}
      </select>
    </div>

    <div className="form-group">
      <label>Yıl</label>
      <select value={yıl} onChange={(e) => setYıl(e.target.value)}>
        <option value="">YY</option>
        {yıllar.map((yıl, index) => (
          <option key={index} value={yıl}>{yıl}</option>
        ))}
      </select>
    </div>

    <div className="form-group">
      <label>Güvenlik Kodu</label>
      <input
        type="text"
        value={güvenlikKodu}
        onChange={(e) => setGüvenlikKodu(e.target.value)}
        placeholder="123"
      />
    </div>
  </div>

  <button type="submit">Şimdi Öde</button>
      </form>
    </div>
  );
};

export default ÖdemeFormu;
