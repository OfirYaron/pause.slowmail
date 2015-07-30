from django.core.mail import send_mail

from letterz_server.settings import EMAIL_HOST_USER


def letter_based_send_mail(letter, title, content):
    """The common parts of letter mail and notification"""
    send_mail(title, content, EMAIL_HOST_USER,
              [letter.recipient], fail_silently=False)


def send_letter_notification(letter):
    """Sent when the letter is sent"""
    letter_based_send_mail(
        letter,
        'eGeret was sent for you',
        'You will receive your egeret from {} in few days.'.format(letter.sender),
    )

def send_letter(letter):
    """Sent when the letter arives to the recipient"""
    letter_based_send_mail(
        letter,
        'Your eGeret is waiting for you',
        'Find your egeret at: localhost:8000/{}'.format(letter.hex_id),
    )


def send_sender_notification(letter):
    """Sent to the sender upon using the service"""
    send_mail('eGeret is going to send an eMail on your behalf',
              'Contact us on egeret.mail@gmail.com if it wasn\'t you',
              EMAIL_HOST_USER, [letter.sender], fail_silently=False)
