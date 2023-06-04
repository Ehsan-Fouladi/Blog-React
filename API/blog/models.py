from django.db import models
from account.models import User
from django.utils.translation import gettext_lazy as _


class Article(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="Users")
    fullname = models.CharField(_("fullname"), max_length=50)
    title = models.CharField(_("title"), max_length=50)
    subjects = models.TextField(_("description"))
    image = models.ImageField(_("image"), upload_to='img')
    create = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
