from  django.urls  import  path
from . import views 

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('user/info/', views.UserInfoView.as_view(), name='user_info'),
]