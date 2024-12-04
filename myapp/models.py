from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    def __str__(self):
            return self.name
    
class Users(models.Model):
    email = models.CharField(max_length=100, verbose_name="Почта пользователя", unique=True)
    password = models.CharField(max_length=50, verbose_name="Пароль")

    def check_password(self, raw_password):
        return self.password == raw_password
    
    
