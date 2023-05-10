import string
import secrets

letters = string.ascii_letters
digits = string.digits
special_chars = ''.join([i for i in string.punctuation if i not in ['(', ')', '[', ']', '{', '}', '^', '|']])
alphabet = letters + digits + special_chars


def create_pwd(pwd_length: int, uppercase: bool = False, lowercase: bool = False) -> str:
    pwd = ''
    for i in range(pwd_length):
        pwd += ''.join(secrets.choice(alphabet))
    if uppercase:
        return pwd.upper()
    elif lowercase:
        return pwd.lower()
    return pwd


create_pwd(10)
