
def create
  print params
end

def show
  @page = Page.find(params[:id])
end

private

def page_params
  params.require(:page).permit(
    :name,
    :email,
    :description
    )
end
