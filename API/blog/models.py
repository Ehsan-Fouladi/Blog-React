from django.db import models
from account.models import User
from django.utils.html import format_html
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    title = models.CharField(verbose_name=_("title"), max_length=50, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Article(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="Users")
    category = models.ManyToManyField(Category, related_name="categories")
    fullname = models.CharField(_("fullname"), max_length=50)
    title = models.CharField(_("title"), max_length=50)
    subjects = models.TextField(_("description"))
    image = models.ImageField(_("image"), upload_to='img')
    create = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("-create",)

    def __str__(self):
        return self.title

    def shoe_image(self):
        if self.image:
            return format_html(f'<img src="{self.image.url}" height="50px" width="60px">')
        return format_html('<h3 style="color: red">تصویر موجود نیست</h3>')
