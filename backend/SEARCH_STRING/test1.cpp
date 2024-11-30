#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
class Transaction {
public:
    string date_time;
    int  trans_no;
    string credit;
    int debit;
    string detail;

    Transaction(const string& dt, int no, string cr,int db, const string& det)
        : date_time(dt), trans_no(no), credit(cr), debit(db), detail(det) {}
    void display() const {
        cout << date_time << ","<< trans_no << credit << ","<< debit << ","<< detail << "\n";
            
    }
};
class TransactionManager {
private:
    vector<Transaction> transactions;
public:
    void readCSV(const string& filename) {
        ifstream file(filename);

        if (!file.is_open()) {
            cerr << "Không thể mở file: " << filename << endl;
            return;
        }
        string line;
        // Bỏ qua dòng tiêu đề
        getline(file, line);

        while (getline(file, line)) {
            istringstream ss(line);
            string date_time, detail, credit;
            int trans_no, debit;
            getline(ss, date_time, ',');
            ss >> trans_no; ss.ignore();
            getline(ss, credit, ',');
            ss >> debit; ss.ignore();
            getline(ss, detail, ',');
              transactions.emplace_back(date_time, trans_no, credit, debit, detail);
        }
    }
    void findKeywordInDetail(const string& keyword) const {
        bool found = false;
        string lowerKeyword = keyword;
        transform(lowerKeyword.begin(), lowerKeyword.end(), lowerKeyword.begin(), ::tolower);
        for (const auto& trans : transactions) {
            string lowerDetail = trans.detail;
            transform(lowerDetail.begin(), lowerDetail.end(), lowerDetail.begin(), ::tolower);
            if (lowerDetail.find(lowerKeyword) != string::npos) {
                trans.display();
                found = true;
            }
        }
        if (!found) {
            cout << "Không có giao dịch nào có chứa từ khóa: " << keyword << " trong cột 'detail'." << endl;
        }
    }
};
int main() {
    string filename = "chuyen_khoan.csv";
    TransactionManager manager;
    manager.readCSV(filename);
    string keyword;
    cout << "input:  ";
    getline(cin, keyword);
    manager.findKeywordInDetail(keyword);
    return 0;
}