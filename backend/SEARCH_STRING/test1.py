import csv
class Transaction:
    def __init__(self, date_time, trans_no, credit, debit, detail):
        self.date_time = date_time
        self.trans_no = trans_no
        self.credit = credit
        self.debit = debit
        self.detail = detail

    def display(self):
        print(f"{self.date_time},{self.trans_no},{self.credit},{self.debit},{self.detail}")

class TransactionManager:
    def __init__(self):
        self.transactions = []

    def read_csv(self, filename):
        try:
            with open(filename, newline='', encoding='utf-8') as file:
                reader = csv.reader(file)
                # Bỏ qua dòng tiêu đề
                next(reader)
                for row in reader:
                    # Giả sử file có cấu trúc phù hợp với ví dụ
                    date_time, trans_no, credit, debit, detail = row
                    self.transactions.append(Transaction(date_time, int(trans_no), credit, debit, detail))
        except FileNotFoundError:
            print(f"Không thể mở file: {filename}")
            return
    def find_transactions_by_keyword_in_detail(self, keyword):
        found = False
        lower_keyword = keyword.lower()
        for trans in self.transactions:
            lower_detail = trans.detail.lower()
            if lower_keyword in lower_detail:
                trans.display()
                found = True
        if not found:
            print(f"Không có giao dịch nào có chứa từ khóa: {keyword} trong cột 'detail'.")
if __name__ == "__main__":
    filename = "chuyen_khoan.csv"
    manager = TransactionManager()
    manager.read_csv(filename)
    keyword = input("input: ").strip()
    manager.find_transactions_by_keyword_in_detail(keyword)
