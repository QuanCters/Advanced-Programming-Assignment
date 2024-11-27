import subprocess

def run_cpp_program(executable):
    try:
        # Run the compiled C++ program
        result = subprocess.run([executable], capture_output=True, text=True, check=True)
        print("Program Output:")
        print(result.stdout)  # Print the standard output of the program
    except subprocess.CalledProcessError as e:
        print(f"Program failed with error: {e.stderr}")

run_cpp_program('./main')  