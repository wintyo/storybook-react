SCRIPT_DIR=$(dirname $0)

# 外部からの引数も引き継がせるため$@をつける
STORYBOOK=static $SCRIPT_DIR/snapshot-image.sh $@
