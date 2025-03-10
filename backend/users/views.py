
from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User
from .serializers import RegisterSerializer, UserSerializer

# Inscription des utilisateurs
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

# Profil utilisateur
class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user
