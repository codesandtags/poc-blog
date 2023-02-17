# Build all Docker containers

# Posts Service
POST_IMAGE="posts"
echo "\n📦 Building [$POST_IMAGE]"
cd posts/
docker build -t codesandtags/posts:latest .
echo "\n📪 Pushing [$POST_IMAGE] to Docker Hub"
docker push codesandtags/posts:latest
#echo "\n🚨 Running Security Scan for [$POST_IMAGE] image"
#docker scan codesandtags/posts:latest
cd ..

# Comments Service
COMMENTS_IMAGE="comments"
echo "\n📦 Building [$COMMENTS_IMAGE]"
cd comments/
docker build -t codesandtags/comments:latest .
echo "\n📪 Pushing [$COMMENTS_IMAGE] to Docker Hub"
docker push codesandtags/comments:latest
#echo "\n🚨 Running Security Scan for [$COMMENTS_IMAGE] image"
#docker scan codesandtags/comments:latest
cd ..


# Moderation Service
MODERATION_IMAGE="query"
echo "\n📦 Building [$MODERATION_IMAGE]"
cd moderation/
docker build -t codesandtags/moderation:latest .
echo "\n📪 Pushing [$MODERATION_IMAGE] to Docker Hub"
docker push codesandtags/moderation:latest
cd ..


# Query Service
QUERY_IMAGE="query"
cd query/
echo "\n📦 Building [$QUERY_IMAGE]"
docker build -t codesandtags/query:latest .
echo "\n📪 Pushing [$QUERY_IMAGE] to Docker Hub"
docker push codesandtags/query:latest
cd ..


# Event Bus Service
EVENT_BUS_IMAGE="event-bust"
echo "\n📦 Building [$EVENT_BUS_IMAGE]"
cd event-bus/
docker build -t codesandtags/event-bus:latest .
echo "\n📪 Pushing [$EVENT_BUS_IMAGE] to Docker Hub"
docker push codesandtags/event-bus:latest
cd ..


# Client Web App
WEB_IMAGE="web-app"
echo "\n📦 Building [$WEB_IMAGE]"
cd client/
docker build -t codesandtags/client:latest .
echo "\n📪 Pushing [$WEB_IMAGE] to Docker Hub"
docker push codesandtags/client:latest
cd ..

echo "\nDocker containers generated. 🍻"