import { format } from 'date-fns';

const daysOfWeek = {
  Sunday: 'Chủ Nhật',
  Monday: 'Thứ Hai',
  Tuesday: 'Thứ Ba',
  Wednesday: 'Thứ Tư',
  Thursday: 'Thứ Năm',
  Friday: 'Thứ Sáu',
  Saturday: 'Thứ Bảy',
};

interface DateFormatterProps {
  date: string | Date; // Ngày cần hiển thị (dạng string hoặc Date)
  showDayOfWeek?: boolean; // Hiển thị ngày trong tuần (mặc định là false)
  showDate?: boolean; // Hiển thị định dạng ngày tháng (mặc định là true)
  dateFormat?: string; // Cấu hình format của ngày (mặc định là 'dd-MM-yyyy')
  className?: string; // Các class CSS
}

const DateFormatter: React.FC<DateFormatterProps> = ({
  date,
  showDayOfWeek = true,
  showDate = true,
  dateFormat = 'dd-MM-yyyy',
  className,
}) => {
  const formattedDate = format(new Date(date), dateFormat); // Lấy định dạng ngày
  const formattedDayOfWeek = format(new Date(date), 'EEEE'); // Lấy tên ngày trong tuần bằng tiếng Anh
  const vietnameseDay = daysOfWeek[formattedDayOfWeek as keyof typeof daysOfWeek]; // Chuyển tên ngày sang tiếng Việt

  return (
    <div className="flex items-center space-x-2">
      {showDayOfWeek && <span className={className}>{vietnameseDay}</span>}
      {showDate && <span className={className}>{formattedDate}</span>}
    </div>
  );
};

export default DateFormatter;
