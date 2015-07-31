from django.core.mail import send_mail
from django.conf import settings


def letter_based_send_mail(letter, title, content):
    """The common parts of letter mail and notification"""
    send_mail(title, content, settings.EMAIL_HOST_USER,
              [letter.to_mail], fail_silently=False)


def send_letter_notification(letter):
    """Sent when the letter is sent"""
    letter_based_send_mail(
        letter,
        'eGeret was sent for you',
        'You will receive your egeret from {} in few days.'.format(letter.from_mail),
    )


def send_letter(letter):
    """Sent when the letter arives to the recipient"""
    hex_id = letter.hex_id.decode('ascii')
    letter_based_send_mail(
        letter,
        'Your eGeret is waiting for you',
        'Find your egeret at: localhost:8000/{}'.format(hex_id),
    )


def send_sender_notification(letter):
    """Sent to the sender upon using the service"""
    send_mail('eGeret is going to send an eMail on your behalf',
              'Contact us on egeret.mail@gmail.com if it wasn\'t you',
              settings.EMAIL_HOST_USER, [letter.from_mail], fail_silently=False)


def send_imidiate_notifications(letter):
    send_sender_notification(letter)
    send_letter_notification(letter)
