from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserListCreateView, UserDetailView, UserViewSet, ItemViewSet, index

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('', include(router.urls)),
    path('', index, name='index')
]