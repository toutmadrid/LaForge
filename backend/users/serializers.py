from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_buyer', 'is_supplier', 'company_name')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'is_buyer', 'is_supplier', 'company_name')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            is_buyer=validated_data.get('is_buyer', False),
            is_supplier=validated_data.get('is_supplier', False),
            company_name=validated_data.get('company_name', '')
        )
        return user
