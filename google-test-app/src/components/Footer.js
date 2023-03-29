import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="lang">ไทย</div>
      <div className="grid-container">
        <div className="footer">
          <a href="https://about.google/?utm_source=google-TH&utm_medium=referral&utm_campaign=hp-footer&fg=1" className="item1">
            เกี่ยวกับ
          </a>
          <a href="https://ads.google.com/intl/th_th/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="item1">
            โฆษณา
          </a>
          <a href="https://www.google.com/intl/th_th/business/" className="item1">
            ธุรกิจ
          </a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1" className="item1">
            วิธีการทำงานของ Search
          </a>
        </div>

        <div className="footer">
          <a href="https://policies.google.com/privacy?hl=th&fg=1" className="item1">
            ความเป็นส่วนตัว
          </a>
          <a href="https://policies.google.com/terms?hl=th&fg=1" className="item1">
            ข้อกำหนด
          </a>
          <a href="" className="item1">
            การตั้งค่า
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
