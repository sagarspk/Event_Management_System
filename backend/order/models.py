from django.db import models
from django.contrib.auth import get_user_model
from event.models import Event

UserModel = get_user_model()

class Order(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.BooleanField(default=False)
    payment_status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} by {self.user.username} for {self.event.name}"