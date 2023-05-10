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
            print(specs)
            pwd += ''.join(secrets.choice(specs_alphabet))
        else:
            print('no specs')
            pwd += ''.join(secrets.choice(no_specs_alphabet))
    return pwd

