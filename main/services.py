import string
import secrets

letters = string.ascii_letters
digits = string.digits
special_chars = ''.join([i for i in string.punctuation if i not in ['(', ')', '[', ']', '{', '}', '^', '|']])
specs_alphabet = letters + digits + special_chars
no_specs_alphabet = letters + digits


def create_pwd(pwd_length: int, specs: bool) -> str:
    pwd = ''
    for i in range(pwd_length):
        if specs:
            pwd = create_pwd_with_specs(pwd, specs_alphabet, special_chars, pwd_length)
        else:
            pwd += ''.join(secrets.choice(no_specs_alphabet))
    return pwd


def create_pwd_with_specs(
        pwd: str,
        full_alphabet: str,
        specs_alph: str,
        pwd_length: int
) -> str:
    """Guarantees that even very short password
     will contain at least one special symbol"""
    while not any(letter in specs_alph for letter in pwd):
        pwd = ''
        for i in range(pwd_length):
            pwd += ''.join(secrets.choice(full_alphabet))
    return pwd
