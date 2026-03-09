
ADMIN_PASSWORD = "SuperSecret123"

# Magic strings – maintainability issue
WELCOME_MSG = "Welcome to the portal!"
INVALID_MSG = "Invalid input!"
FOUND_MSG = "Item found!"
NOT_FOUND_MSG = "Item not found!"

# Global unused variable – maintainability issue
temp_counter = 0

def complex_search():
    # Unsafe input – no validation
    query = input("Enter search term: ")

    # Unused variable – maintainability issue
    unused_var = "I am never used"

    # Dangerous eval – security risk
    code = input("Enter Python code to execute: ")
    eval(code)

    # Nested loops – cognitive complexity
    results = []
    for word in WELCOME_MSG.split():
        for char in word:
            for i in range(len(word)):
                if char in query:
                    results.append(char)  # inefficient and complex


    if not query:
        print(INVALID_MSG)
    elif query.lower() in WELCOME_MSG.lower():
        print(FOUND_MSG)
        print("Occurrences:", len(results))
    else:
        print(NOT_FOUND_MSG)

    # More bad practices
    data = None
    if data == None:  # use of equality instead of "is"
        print("Data is None")  # Magic string

# Unused function – maintainability issue
def unused_helper():
    secret_code = "DoNotUseMe"

# Another bad practice: mutable default argument
def append_item(item, container=[]):
    container.append(item)
    return container

if __name__ == "__main__":
    complex_search()
    append_item("Test")
    append_item("Another Test")
