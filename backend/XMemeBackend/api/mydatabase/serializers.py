from rest_framework import serializers

from .models import mydatabase

class mydatabaseSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
        return mydatabase.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.email = validated_data.get('username', instance.username)
        instance.content = validated_data.get('caption', instance.caption)
        instance.created = validated_data.get('src', instance.src)
        instance.save()
        return instance

    class Meta:
        model = mydatabase
        fields = ('id', 'username', 'caption', 'src')
