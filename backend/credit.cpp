#include <string>
#include <fstream>
#include <iostream>
#include <sstream>
#include <vector>
#include <algorithm>
#include <chrono>

struct Transaction
{
    std::string date_time;
    int trans_no;
    int credit;
    int debit;
    std::string detail;
};

std::string removeQuotes(const std::string &s)
{
    std::string result = s;

    // Remove leading quote if present
    if (!result.empty() && result.front() == '"')
    {
        result.erase(result.begin());
    }

    // Remove trailing quote if present
    if (!result.empty() && result.back() == '"')
    {
        result.pop_back();
    }

    return result;
}

std::vector<Transaction> readCSV(const std::string &filename)
{
    std::ifstream file(filename);
    std::string line;
    std::vector<Transaction> data; // Vector to store Transaction structs

    // Check if the file is open
    if (!file.is_open())
    {
        std::cerr << "Error opening file: " << filename << std::endl;
        return data;
    }

    // Skip the first line
    std::getline(file, line);

    // Read each line from the CSV file
    while (std::getline(file, line))
    {
        std::stringstream ss(line);
        std::string value;
        Transaction record; // Create a Transaction struct to hold the data

        // Split the line by commas
        std::getline(ss, value, ','); // Read date_time
        record.date_time = removeQuotes(value);
        std::getline(ss, value, ','); // Read trans_no
        record.trans_no = std::stoi(removeQuotes(value));
        std::getline(ss, value, ','); // Read credit
        record.credit = std::stoi(removeQuotes(value));
        std::getline(ss, value, ','); // Read debit
        record.debit = std::stoi(removeQuotes(value));
        std::getline(ss, value, ','); // Read detail
        record.detail = removeQuotes(value);

        // Add the record to the data vector
        data.push_back(record);
    }

    file.close();

    return data;
}

std::vector<Transaction> creditSearch(
    const std::vector<Transaction> &data,
    int lower_bound_val,
    int upper_bound_val)
{
    std::vector<Transaction> results;

    // Find the iterator to the first element not less than lower_bound_val
    auto it_lower = std::lower_bound(data.begin(), data.end(), lower_bound_val,
                                     [](const Transaction &a, int b)
                                     { return a.credit < b; });
    // Find the iterator to the first element greater than upper_bound_val
    auto it_upper = std::upper_bound(data.begin(), data.end(), upper_bound_val,
                                     [](int a, const Transaction &b)
                                     { return a < b.credit; });

    // Iterate from it_lower to it_upper
    for (auto it = it_lower; it != it_upper; ++it)
    {
        results.push_back(*it);
    }

    return results;
}

std::vector<Transaction> detailSearch(const std::string &keyword, std::vector<Transaction> transactions)
{
    std::vector<Transaction> result = {};
    std::string lowerKeyword = keyword;
    std::transform(lowerKeyword.begin(), lowerKeyword.end(), lowerKeyword.begin(), ::tolower);
    for (const auto &trans : transactions)
    {
        std::string lowerDetail = trans.detail;
        transform(lowerDetail.begin(), lowerDetail.end(), lowerDetail.begin(), ::tolower);
        if (lowerDetail.find(lowerKeyword) != std::string::npos)
        {
            result.push_back(trans);
        }
    }
    return result;
}

int main(int argc, char *argv[])
{
    // Check if the correct number of arguments is provided
    if (argc != 4)
    {
        std::cerr << "Usage: " << argv[0] << " <lower_key> <upper_key>" << std::endl;
        return 1; // Exit with an error code
    }

    // int search_key = argv[1];
    std::string detail_key = argv[1];
    int lower_key = std::stoi(argv[2]);
    int upper_key = std::stoi(argv[3]);

    std::string filename = "chuyen_khoan.csv";
    std::vector<Transaction> data = readCSV(filename);

    std::sort(data.begin(), data.end(), [](const Transaction &a, const Transaction &b)
              {
                  return a.credit < b.credit; // Sort by credit in ascending order
              });

    std::vector<Transaction> temp = creditSearch(data, lower_key, upper_key);
    std::vector<Transaction> results = detailSearch(detail_key, temp);

    std::cout
        << "["; // Start of JSON array
    for (size_t i = 0; i < results.size(); ++i)
    {
        const Transaction &record = results[i];
        std::cout << "{"
                  << "\"date_time\": \"" << record.date_time << "\", "
                  << "\"trans_no\": " << record.trans_no << ", "
                  << "\"credit\": " << record.credit << ", "
                  << "\"debit\": " << record.debit << ", "
                  << "\"detail\": \"" << record.detail << "\""
                  << "}";
        if (i < results.size() - 1)
            std::cout << ", "; // Add comma if not the last element
    }
    std::cout << "]";

    return 0;
}
