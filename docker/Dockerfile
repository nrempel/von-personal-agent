FROM bcgovimages/von-image:py36-1.6-7

ADD src/requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -q -r /tmp/requirements.txt

ADD src /app