from shop.models import Article
from rest_framework.serializers import HyperlinkedModelSerializer

class ArticleSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'title','content','category']
        read_only_fields = ['id']
