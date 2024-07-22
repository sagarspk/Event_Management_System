from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.db import models


class UserModelManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_admin(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class UserModel(AbstractBaseUser):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=254)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    contact = models.CharField(max_length=10,null=True)
    address = models.CharField(max_length=100,null=True)
    profile_image = CloudinaryField('profile_image', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    objects = UserModelManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['']

    def __str__(self):
        return self.first_name + ' ' + self.last_name