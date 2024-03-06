import React from 'react'
import './CSS/HomePage.css'
import img_item_1_svg from '../Componets/Assets/1.svg'
import img_item_2_svg from '../Componets/Assets/2.svg'
import img_item_3_svg from '../Componets/Assets/3.svg'
import img_item_4_svg from '../Componets/Assets/4.svg'
import img_transaction_4x from '../Componets/Assets/Transaction@4x.png'
import img_budget_4x from '../Componets/Assets/budget@4x.png'
import img_report_4x from '../Componets/Assets/REPORT@4x.png'
import img_item_5_svg from '../Componets/Assets/5.svg'
import img_item_6_svg from '../Componets/Assets/6.svg'
import img_item_7_svg from '../Componets/Assets/7.svg'
import img_item_8_svg from '../Componets/Assets/8.svg'
import img_item_9_svg from '../Componets/Assets/9.svg'
import img_item_10_svg from '../Componets/Assets/10.svg'
import start_svg from '../Componets/Assets/Stars.svg'
const HomePage = () => {
  return (
    <div>
      <div className="content-1">
        <div>
          <h1>Cách đơn giản nhất</h1>
          <h1>để quản lí tài chính cá nhân</h1>
          <button>Bắt đầu ngay</button>
        </div>
      </div>
      <div className="content-2">
        <div className='content'>
          <div className="item">
            <img src={img_item_1_svg} alt="" />
            <p>Thông tin bảo mật 100%</p>
          </div>
          <div className="item">
            <img src={img_item_2_svg} alt="" />
            <p>Hơn 1 triệu người dùng</p>
          </div>
          <div className="item">
            <img src={img_item_3_svg} alt="" />
            <p>100,000 đánh giá 5 sao</p>
          </div>
          <div className="item">
            <img src={img_item_4_svg} alt="" />
            <p>Apple & Google đề xuất</p>
          </div>
        </div>
      </div>
      <div className="content-3">
        <div className="content-left">
          <img src={img_transaction_4x} alt="" />
        </div>
        <div className="content-right">
          <h3>Ghi chép thu chi trở nên dễ dàng hơn</h3>
          <p>Bạn chỉ tốn vài phút để ghi chép lại chi tiêu hàng ngày của mình, và phân loại vào các mục như là: Thức Ăn, Mua sắm; hay là thêm các khoản thu nhập như Lương, Quà tặng, v.v...</p>
        </div>
      </div>
      <div className="content-4">
        <div className="content-right">
          <h3>Không còn nỗi lo chi tiêu ngoài tầm kiểm soát</h3>
          <p>Bạn chỉ tốn vài phút để ghi chép lại chi tiêu hàng ngày của mình, và phân loại vào các mục như là: Thức Ăn, Mua sắm; hay là thêm các khoản thu nhập như Lương, Quà tặng, v.v...</p>
        </div>
        <div className="content-left">
          <img src={img_budget_4x} alt="" />
        </div>
      </div>
      <div className="content-5">
        <div className="content-left">
          <img src={img_report_4x} alt="" />
        </div>
        <div className="content-right">
          <h3>Theo dõi và quản lý tiền hiệu quả</h3>
          <p>Money Lover tự động tạo cho bạn những biểu đồ báo cáo cực kỳ dễ nhìn, dễ hiểu, dễ nhớ, cho bạn một cái nhìn rõ ràng về các khoản thu chi của bản thân. Chẳng còn hoang mang không rõ 'tiền về nơi đâu' nữa!</p>
        </div>
      </div>

      <div className="content-6">
        <h1>Các tính năng nổi bật</h1>
        <div className="content">
          <div className="item">
            <img src={img_item_5_svg} alt="" />
            <div className="item-content">
              <h3>Sử dụng trên nhiều thiết bị một lúc</h3>
              <p>FinTrack có thể đồng bộ trên tất cả thiết bị và các nền tảng với tiêu chuẩn bảo mật chặt chẽ.</p>
            </div>
          </div>
          <div className="item">
            <img src={img_item_6_svg} alt="" />
            <div className="item-content">
              <h3>Tự động nhắc nhở các khoản thu chi định kì</h3>
              <p>Nhắc nhở bạn về các khoản thu chi định kỳ hàng tuần, hàng tháng... trước ngày giao dịch.</p>
            </div>
          </div>
          <div className="item">
            <img src={img_item_7_svg} alt="" />
            <div className="item-content">
              <h3>Chuyển đổi tiền tệ khi đi du lịch</h3>
              <p>Chuyển đổi tiền tệ nhanh chóng, tỉ giá được cập nhật sát sao, hỗ trợ tất cả loại tiền tệ.</p>
            </div>
          </div>
          <div className="item">
            <img src={img_item_8_svg} alt="" />
            <div className="item-content">
              <h3>Tiết kiệm cho dự định tương lai</h3>
              <p>Được nhắc nhở thường xuyên về khoản tiết kiệm, bạn sẽ nhanh chóng đạt được mục tiêu tài chính mà mình đề ra.</p>
            </div>
          </div>
          <div className="item">
            <img src={img_item_9_svg} alt="" />
            <div className="item-content">
              <h3>Không phải bận tâm về vay - nợ</h3>
              <p>FinTrack sẽ giúp bạn ghi nhớ các khoản vay, nợ; theo dõi tiến độ trả tiền dễ dàng khi phải trả nhiều lần.</p>
            </div>
          </div>
          <div className="item">
            <img src={img_item_10_svg} alt="" />
            <div className="item-content">
              <h3>Quét hóa đơn tiện lợi</h3>
              <p>Bạn chỉ cần chụp lại hóa đơn và chờ ứng dụng tự động cập nhật và phân loại giao dịch vào ví của bạn.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-7">
        <h1>Cảm nhận từ người dùng</h1>
        <p><img src={start_svg} alt="" /><span>4.9</span><p>Đánh giá từ người dùng</p></p>
        <div className="content">
          <div className="item">
            <p>Money Lover quả là một ứng dụng hoàn hảo! Tôi và chồng đều sử dụng nó để quản lý và theo dõi tất cả thu chi cá nhân. Chúng tôi còn có thể lập các tài khoản và ngân sách cho gia đình chung của cả hai khi sử dụng một ứng dụng hoàn hảo như Money Lover. Hơn thế nữa, những người phát triển ứng dụng còn rất thực tế và cực kì có ích.</p>
            <h3>Nguyen Gia Hau</h3>
          </div>
          <div className="item">
            <p>Ứng dụng này đã khiến tôi trở nên ngăn nắp và cẩn thận hơn, đặc biệt là với những vấn đề về tiền bạc. Nó có các tính năng rất thông minh và dễ dàng để sử dụng. Nếu bạn đang gặp khó khăn trong việc quản lý tài chính của mình thì Money Lover sẽ là một sự lựa chọn hoàn hảo đấy. Thử ngay để cảm nhận sự khác biệt!</p>
            <h3>Tran Thi Kim Huong</h3>
          </div>
          <div className="item">
            <p>Một ứng dụng đơn giản và dễ dàng truy cập cho phép bạn lập ngân sách hàng tuần, hàng tháng, hàng năm. Lịch trình tài chính rõ ràng giúp người dùng thiết lập báo động và gắn nhãn dán lên tất cả các giao dịch của mình.</p>
            <h3>Nguyen Tien Phuc</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage