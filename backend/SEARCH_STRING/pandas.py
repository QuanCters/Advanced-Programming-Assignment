import pandas as pd
df = pd.read_csv('chuyen_khoan.csv')
def tim_kiem_tu_khoa(tu_khoa):
    tu_khoa = tu_khoa.lower()
    ket_qua = df[df['detail'].str.contains(tu_khoa, case=False, na=False)]
    return ket_qua
tu_khoa = input("Nhập từ khóa tìm kiếm: ")
ket_qua = tim_kiem_tu_khoa(tu_khoa)
if not ket_qua.empty:
    print("Kết quả tìm kiếm:")
    print(ket_qua)
else:
    print("Không tìm thấy kết quả nào.")