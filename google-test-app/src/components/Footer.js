import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div class="lang">ไทย</div>
      <div className="grid-container">
        <div className="footer">
          <a href="https://google.com" className="item1">
            เกี่ยวกับ
          </a>
          <a href="" className="item1">
            โฆษณา
          </a>
          <a href="" className="item1">
            ธุรกิจ
          </a>
          <a href="" className="item1">
            วิธีการทำงานของ Search
          </a>
        </div>

        <div className="footer">
          <a href="" className="item1">
            ความเป็นส่วนตัว
          </a>
          <a href="" className="item1">
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
