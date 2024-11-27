import csv
from flask import Flask
from flask_restx import Api, Resource, reqparse
class Transaction:
    def __init__(self, date_time, trans_no, credit, debit, detail):
        self.date_time = date_time
        self.trans_no = trans_no
        self.credit = credit
        self.debit = debit
        self.detail = detail
    def display(self):
        return {
            "date_time": self.date_time,
            "trans_no": self.trans_no,
            "credit": self.credit,
            "debit": self.debit,
            "detail": self.detail
        }
class TransactionManager:
    def __init__(self):
        self.transactions = []

    def read_csv(self, filename):
        try:
            with open(filename, newline='', encoding='utf-8') as file:
                reader = csv.reader(file)
                next(reader)  # Bỏ qua dòng tiêu đề
                for row in reader:
                    date_time, trans_no, credit, debit, detail = row
                    self.transactions.append(Transaction(date_time, int(trans_no), credit, int(debit), detail))
        except FileNotFoundError:
            print(f"Không thể mở file: {filename}")
            return []

    def find_transactions_by_keyword_in_detail(self, keyword):
        result = []
        lower_keyword = keyword.lower()
        for trans in self.transactions:
            lower_detail = trans.detail.lower()
            if lower_keyword in lower_detail:
                result.append(trans.display())
        return result

# Khởi tạo Flask app và API
app = Flask(__name__)
api = Api(app)
filename = "chuyen_khoan.csv"
manager = TransactionManager()
manager.read_csv(filename)

# Định nghĩa parser cho API
parser = reqparse.RequestParser()
parser.add_argument('keyword', type=str, required=True, help="Từ khóa tìm kiếm trong cột 'detail'")

# Định nghĩa Resource cho API
class TransactionSearch(Resource):
    def get(self):
        args = parser.parse_args()
        keyword = args['keyword']
        results = manager.find_transactions_by_keyword_in_detail(keyword)
        if results:
            return {"transactions": results}, 200
        else:
            return {"message": f"Không có giao dịch nào có chứa từ khóa '{keyword}' trong cột 'detail'."}, 404

# Đăng ký API endpoint
api.add_resource(TransactionSearch, '/search')

if __name__ == "__main__":
    app.run(debug=True)
#http://127.0.0.1:5000/search?keyword=noidungnhapcantracuu